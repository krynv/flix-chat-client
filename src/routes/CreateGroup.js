import React from 'react';
import { Message, Form, Button, Input, Container, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateGroup extends React.Component {
    constructor(props) {
        super(props);

        extendObservable(this, {
            name: '',
            errors: {},
        });
    }

    onChange = (e) => {
        const { name, value } = e.target;
        this[name] = value;
    }

    onSubmit = async () => {
        const { name } = this;
        const response = await this.props.mutate({ variables: { name } });

        //console.log(response);

        const { ok, errors } = response.data.createGroup;

        if (ok) {
            this.props.history.push('/');
        } else {
            const err = {};

            errors.forEach(({ path, message }) => {
                err[`${path}Error`] = message;
            });

            this.errors = err;
        }
    }

    render() {
        const { name, errors: { nameError } } = this;

        const errorList = [];

        if (nameError) {
            errorList.push(nameError);
        }

        return (
            <Container text>
                <Header as='h2'>Create a group</Header>
                <Form>
                    <Form.Field error={!!nameError}>
                        <Input name="name" onChange={this.onChange} value={name} placeholder="Name" fluid></Input>
                    </Form.Field>
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Form>
                {errorList.length ?
                    <Message
                        error
                        header="There were issues with logging in to your flix-chat account."
                        list={errorList}
                    /> : null}
            </Container>
        );
    }
}

const createGroupMutation = gql`
    mutation($name:String!) {
        createGroup(name:$name) {
            ok
            errors{
                path
                message
            }
        }
    }
`;

export default graphql(createGroupMutation)(observer(CreateGroup)); // nested higher order components