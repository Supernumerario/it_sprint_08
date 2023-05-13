import { useState } from 'react';
import Header from "../components/Header/Header";
import styled from "styled-components";



// STYLED COMPONENTS
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0 auto;
  max-width: 1340px;
`;

const Title = styled.h1`
  grid-column: 2 / span 10;
  text-align: center;
  padding: 40px;
`;

const SignInForm = styled.form`
  grid-column: 4 / span 6;
  text-align: left;
  padding: 0 40px;
`;

const Label = styled.label`
	font-size: 0.8em;
	text-transform: uppercase;
	color: #aaa;
	text-align: left;
	margin: 4px 0;
	display: block;
`;

const Input = styled.input`
	width: 100%;
	min-height: 40px;
	border-radius: 4px;
	padding: 0 16px;
	box-sizing: border-box;
	font-size: 1em;
	margin-bottom: 16px;
`;

const Checkbox = styled.input`
	display: inline-block;
	min-height: 24px;
	width: 24px;
	der-radius: 4px;
	box-sizing: border-box;
	padding: 0;
	margin: 16px 16px 0 0;
	accent-color: #fade4b;
`;

const Submit = styled.input`
	min-width: 200px;
	height: 40px;
	margin: 24px 0 80px;
	border-radius: 32px;
	border: none;
	font-weight: 700;
	background-color: #fade4b;
	color: black;
	text-transform: uppercase;
	&:hover { cursor: pointer; background-color: #f9d41a; }
`



// SIGNIN COMPONENT
export default function SignIn() {

	function local(item) { return window.localStorage.getItem(item); }
	
	const [formValues, setFormValues] = useState({
		firstname: local('firstname') ? local('firstname') : "",
		lastname: local('lastname') ? local('lastname') : "",
		email: local('email') ? local('email') : "",
		password: local('password') ? local('password') : "",
		offers: local('offers') ? local('offers') : ""
	});

	function handleInputChange(key, value) {
		try {
			setFormValues((formValues) => ({
				...formValues,
				[key]: value
			}));
			window.localStorage.setItem(key, value);
		} catch (error) {
			console.error(error);
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log("Account created:");
		console.log(formValues);
	}

	return (
		<>
      <Header />
      <Main>
        <Title>Create your account</Title>
				<SignInForm onSubmit={handleSubmit}>
					<div>
						<Label htmlFor="form-name">FIRST NAME</Label>
					</div>
					<div>
						<Input type="text" id="form-name" name="firstname" onChange={(e) => handleInputChange(e.target.name, e.target.value)}></Input>
					</div>
					<div>
						<Label htmlFor="form-lastname">LAST NAME</Label>
					</div>
					<div>
						<Input type="text" id="form-lastname" name="lastname" onChange={(e) => handleInputChange(e.target.name, e.target.value)}></Input>
					</div>
					<div>
						<Label htmlFor="form-email">EMAIL</Label>
					</div>
					<div>
						<Input type="text" id="form-email" name="email" onChange={(e) => handleInputChange(e.target.name, e.target.value)}></Input>
					</div>
					<div>
						<Label htmlFor="form-password">PASSWORD</Label>
					</div>
					<div>
						<Input type="password" id="form-password" name="password" onChange={(e) => handleInputChange(e.target.name, e.target.value)}></Input>
					</div>
					<div>
						<Checkbox type="checkbox" id="form-offers" name="offers" onChange={(e) => handleInputChange(e.target.name, e.target.checked)}></Checkbox>
						<label htmlFor="form-offers">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</label>
					</div>
					<p>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights.</p>
					<Submit type="submit" value="CREATE ACCOUNT"></Submit>
				</SignInForm>
			</Main>
		</>
	);
}