import React from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {

    state = {
        username: '',
        email: '',
        password: ''
    };

    // one onChange function
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = async () => {
        const response = await this.props.mutate({
            variables: this.state,
        })
        console.log(response);
    }

    render() {

        const { username, email, password } = this.state;

        return (
            <Container text>
                <Header as='h2'>Register</Header>
                <Input name="username" onChange={this.onChange} value={username} placeholder="Username" fluid></Input>
                <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid></Input>
                <Input name="password" onChange={this.onChange} value={password} type="password" placeholder="Password" fluid></Input>
                <Button onClick={this.onSubmit}>Submit</Button>
            </Container>
        );
    }
}

const registerMutation = gql`
    mutation ($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password)
    }
`;

export default graphql(registerMutation)(Register);