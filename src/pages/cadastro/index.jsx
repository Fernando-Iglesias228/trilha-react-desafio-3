import React from "react";
import { Header } from "../../components/Header";
import { BeneathLogin, Column, Container, ErrorText, LoginText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { Input } from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().required().min(3),
}).required();

const Cadastro = () => {
    const navigate = useNavigate()

    const handleClickLogin = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    
    const onSubmit = async (formData) => {
        try{
            const emailExists = ;
            if (!emailExists){
                api.post('/users', {
                    name: formData.nome,
                    email: formData.email,
                    senha: formData.senha
            });
                alert("Usuário criado com sucesso!")
            } else {
                alert("Usuário já existe")
            }
        } catch(e){
            alert(`Houve um erro: ${e}`)
        }
    };


    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais 
                        tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} />
                            {errors.nome && <ErrorText>Nome é obrigatório</ErrorText>}
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <ErrorText>E-mail é obrigatório</ErrorText>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <ErrorText>Senha é obrigatória. Deve possuir mais de 3 caracteres.</ErrorText>}
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                            <BeneathLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                                Políticas de Privacidade e os Termos de Uso da DIO.</BeneathLogin>
                            <Row>
                                <LoginText>Já tenho conta. <button onClick={handleClickLogin}>Fazer login</button></LoginText>
                            </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Cadastro }