'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api, ApiError } from '@/lib/api-client';
import { toast } from 'sonner';

interface Example {
  id: number;
  name: string;
  description?: string;
  created_at?: string;
}

export default function ExampleList() {
  const [examples, setExamples] = useState<Example[]>([]);
  const [loading, setLoading] = useState(false);
  const [newExample, setNewExample] = useState({ name: '', description: '' });

  const fetchExamples = async () => {
    setLoading(true);
    try {
      const data = await api.get<Example[]>('/example');
      setExamples(data);
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(`Failed to fetch examples: ${error.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const createExample = async () => {
    if (!newExample.name.trim()) {
      toast.error('Name is required');
      return;
    }

    try {
      const data = await api.post<Example>('/example', newExample);
      setExamples(prev => [...prev, data]);
      setNewExample({ name: '', description: '' });
      toast.success('Example created successfully');
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(`Failed to create example: ${error.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  const deleteExample = async (id: number) => {
    try {
      await api.delete(`/example?id=${id}`);
      setExamples(prev => prev.filter(item => item.id !== id));
      toast.success('Example deleted successfully');
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(`Failed to delete example: ${error.message}`);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    fetchExamples();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Examples Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Input
              placeholder="Name"
              value={newExample.name}
              onChange={(e) => setNewExample(prev => ({ ...prev, name: e.target.value }))}
              className="flex-1 min-w-0"
            />
            <Input
              placeholder="Description (optional)"
              value={newExample.description}
              onChange={(e) => setNewExample(prev => ({ ...prev, description: e.target.value }))}
              className="flex-1 min-w-0"
            />
            <Button onClick={createExample} className="whitespace-nowrap">
              Add Example
            </Button>
          </div>

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={fetchExamples} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </Button>
          </div>

          <div className="space-y-2">
            {examples.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                {loading ? 'Loading examples...' : 'No examples found. Create one above.'}
              </p>
            ) : (
              examples.map((example) => (
                <Card key={example.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold">{example.name}</h3>
                      {example.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {example.description}
                        </p>
                      )}
                      {example.created_at && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Created: {new Date(example.created_at).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteExample(example.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 