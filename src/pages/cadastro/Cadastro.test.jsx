import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Cadastro } from './index';
import { BrowserRouter } from 'react-router-dom';

const renderCadastro = () => {
    return render(
        <BrowserRouter>
            <Cadastro />
        </BrowserRouter>
    );
};

test('renderiza os campos da tela de cadastro', () => {
    renderCadastro();
    expect(screen.getByText('Comece agora grátis')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nome completo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /criar minha conta/i })).toBeInTheDocument();
});

test('exibe mensagem de erro quando campos obrigatorios nao sao preenchidos', async () => {
    renderCadastro();

    const submitButton = screen.getByRole('button', { name: /criar minha conta/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText(/e-mail é obrigatório/i)).toBeInTheDocument();
        expect(screen.getAllByText(/no mínimo 3 caracteres/i).length).toBeGreaterThan(0);
    });
});

test('exibe mensagem de erro para email com formato invalido', async () => {
    renderCadastro();

    const emailInput = screen.getByPlaceholderText('E-mail');
    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });

    const submitButton = screen.getByRole('button', { name: /criar minha conta/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText(/e-mail não é válido/i)).toBeInTheDocument();
    });
});
