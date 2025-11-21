export interface LoginResponseDTO {
    token: string;
    user: {
        id: number;
        name: string;
        role: 'client' | 'provider' | 'admin';
    };
};