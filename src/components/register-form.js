import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';

export class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
	}

	onSubmit(values) {
        console.log(values);
    }

	render() {
		return (
			<form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="name">Name</label>
                <Field name="name" id="name" type="text" component="input" />
                <label htmlFor="email">Email address</label>
                <Field name="email" id="email" type="email" component="input" />
                <label htmlFor="message">Message</label>
                <Field name="message" id="message" component="textarea" />
                <button type="submit">Send message</button>
            </form>
		)
	}
}

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))
})(RegisterForm);