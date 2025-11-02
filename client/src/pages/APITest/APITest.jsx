import { useState, useEffect } from 'react';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../../services/userServices.js';

export const APITest = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    tipo_usuario: 'cliente',
  });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('');

  // Listar todos os usuários
  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
      setFilteredUsers(res.data);
      setMessage('Lista de usuários carregada.');
    } catch (err) {
      console.error(
        'Erro ao listar usuários:',
        err.response?.data || err.message
      );
      setMessage('Erro ao listar usuários');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtrar usuário pelo ID
  const handleSearch = (e) => {
    e.preventDefault();
    const query = search.trim();
    if (!query) {
      setFilteredUsers(users);
      setMessage('Todos os usuários exibidos');
      return;
    }
    const filtered = users.filter((u) => u.id_usuario.toString() === query);
    setFilteredUsers(filtered);
    if (filtered.length === 0) setMessage('Nenhum usuário encontrado.');
    else setMessage(`Usuário com ID ${query} encontrado.`);
  };

  // Criar ou atualizar usuário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await updateUser(editId, form);
        setMessage(`Usuário ${form.nome} atualizado com sucesso!`);
        setEditId(null);
      } else {
        await createUser(form);
        setMessage(`Usuário ${form.nome} criado com sucesso!`);
      }
      setForm({
        nome: '',
        email: '',
        senha: '',
        tipo_usuario: 'cliente',
      });
      fetchUsers();
    } catch (err) {
      console.error(
        'Erro ao salvar usuário:',
        err.response?.data || err.message
      );
      setMessage('Erro ao salvar usuário');
    }
  };

  // Preparar edição
  const handleEdit = (user) => {
    setForm({
      nome: user.nome,
      email: user.email,
      senha: '',
      tipo_usuario: user.tipo_usuario,
    });
    setEditId(user.id_usuario);
    setMessage(`Editando usuário ${user.nome}`);
  };

  // Deletar usuário
  const handleDelete = async (id) => {
    if (!window.confirm('Deseja realmente deletar este usuário?')) return;
    try {
      await deleteUser(id);
      setMessage('Usuário deletado com sucesso!');
      fetchUsers();
    } catch (err) {
      console.error(
        'Erro ao deletar usuário:',
        err.response?.data || err.message
      );
      setMessage('Erro ao deletar usuário');
    }
  };

  return (
    <div>
      <h2>CRUD de Usuários</h2>

      {message && (
        <p>
          <strong>{message}</strong>
        </p>
      )}

      {/* Formulário de criação/edição */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          value={form.senha}
          onChange={(e) => setForm({ ...form, senha: e.target.value })}
          required={!editId} // senha obrigatória apenas ao criar
        />
        <select
          value={form.tipo_usuario}
          onChange={(e) => setForm({ ...form, tipo_usuario: e.target.value })}
        >
          <option value="cliente">Cliente</option>
          <option value="prestador">Prestador</option>
          <option value="administrador">Administrador</option>
        </select>
        <button type="submit">{editId ? 'Atualizar' : 'Criar'}</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({
                nome: '',
                email: '',
                senha: '',
                tipo_usuario: 'cliente',
              });
              setMessage('Edição cancelada');
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      {/* Formulário de busca por ID */}
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Buscar por ID do usuário"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
        <button
          type="button"
          onClick={() => {
            setFilteredUsers(users);
            setSearch('');
            setMessage('Todos os usuários exibidos');
          }}
        >
          Limpar
        </button>
      </form>

      {/* Lista de usuários filtrados */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id_usuario}>
            {user.id_usuario} - {user.nome} ({user.email}) - {user.tipo_usuario}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id_usuario)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
