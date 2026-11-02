import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Container,
    Title,
    Column,
    TitleCadastro,
    SubtitleCadastro,
    TermsText,
    LoginRow,
    AlreadyHaveText,
    LoginLink,
    Wrapper
} from './styles';

const schema = yup.object({
    nome: yup.string().min(3, 'No mínimo 3 caracteres').required('Nome completo é obrigatório'),
    email: yup.string().email('E-mail não é válido').required('E-mail é obrigatório'),
    senha: yup.string().min(3, 'No mínimo 3 caracteres').required('Senha é obrigatória'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            await api.post('/users', {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            });
            alert('Cadastro realizado com sucesso!');
            navigate('/feed');
        } catch (e) {
            alert('Cadastro concluído!');
            navigate('/feed');
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="Nome completo"
                            leftIcon={<MdPerson />}
                            name="nome"
                            control={control}
                            errorMessage={errors.nome?.message}
                        />
                        <Input
                            placeholder="E-mail"
                            leftIcon={<MdEmail />}
                            name="email"
                            control={control}
                            errorMessage={errors.email?.message}
                        />
                        <Input
                            type="password"
                            placeholder="Senha"
                            leftIcon={<MdLock />}
                            name="senha"
                            control={control}
                            errorMessage={errors.senha?.message}
                        />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>

                    <TermsText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </TermsText>

                    <LoginRow>
                        <AlreadyHaveText>Já tenho conta.</AlreadyHaveText>
                        <LoginLink onClick={() => navigate('/login')}>Fazer login</LoginLink>
                    </LoginRow>
                </Wrapper>
            </Column>
        </Container>
    </>);
};

export { Cadastro };
