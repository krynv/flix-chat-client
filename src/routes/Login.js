import React from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';

export default observer(class Login extends React.Component {
    constructor(props) {
        super(props);


        extendObservable(this, {
            email: '',
            password: '',
        });
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this[name] = value;
    }

    onSubmit = () => {
        const { email, password } = this;
        console.log(email);
        console.log(password);
    }

    render() {
        const { email, password } = this;

        return (
            <Container text>
                <Header as='h2'>Login</Header>
                <Input name="email" onChange={this.onChange} value={this.email} placeholder="Email" fluid></Input>
                <Input name="password" onChange={this.onChange} value={this.password} type="password" placeholder="Password" fluid></Input>
                <Button onClick={this.onSubmit}>Submit</Button>
            </Container>
        );
    }
}); 