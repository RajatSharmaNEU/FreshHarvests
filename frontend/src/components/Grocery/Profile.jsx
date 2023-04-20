import React, {useState} from 'react';
import styled from 'styled-components';
import localStorageService from '../../configs/localStorageService';
import axios from '../../configs/axiosConfig';
import Snackbar from "../SnackBar/SnackBar";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;;
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 30%
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Field = styled.input`
  font-size: 1.1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #f0f0f0;
  color: #333;
  cursor: default;
`;

const EditButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
const SaveButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: #fff;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: #fff;
  cursor: pointer;
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;


const Profile = () => {

    const user = localStorageService.getUser();
    const [notify, setNotify] = useState("");
    const [open, setOpen] = useState(false);

    const [editable, setEditable] = useState(false);
    const [firstName, setfirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("********");
    const [address, setAddress] = useState(user.address);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [firstNameError, setfirstNameError] = useState('');
    const [lastNameError, setlastNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [addresError, setAddressError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handleCancel = () => {
        setEditable(!editable);
        const {firstName, lastName, email, address, phoneNumber} = localStorageService.getUser();
        setfirstName(firstName);
        setlastName(lastName);
        setEmail(email);
        setPassword("********");
        setAddress(address);
        setPhoneNumber(phoneNumber);
        setfirstNameError('');
        setlastNameError('');
        setEmailError('');
        setAddressError('');
        setPasswordError('')
        setPhoneError('');
    };

    const handleClose = () => {
        setOpen(false);
    }
    const handleSave = () => {
        const nameRegex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        const firstNameIsValid = nameRegex.test(firstName);
        const lastNameIsValid = nameRegex.test(lastName);
        const emailIsValid = emailRegex.test(email);
        const phoneIsValid = phoneRegex.test(phoneNumber);
        const addressIsValid = addressRegex.test(address);
        const passwordIsValid = passwordRegex.test(password);

        if (!firstNameIsValid) {
            setfirstNameError('Please enter a valid first name');
            return;
        }
        if (!lastNameIsValid) {
            setlastNameError('Please enter a valid last name');
            return;
        }

        if (!emailIsValid) {
            setEmailError('Please enter a valid email');
            return;
        }
        if (!addressIsValid) {
            setAddressError('Please enter a valid address');
            return;
        }

        if (!passwordIsValid) {
            setPasswordError('Please enter a valid password');
            return;
        }

        if (!phoneIsValid) {
            setPhoneError('Please enter a valid phone number');
            return;
        }

        let saveObject = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "address": address,
            "phoneNumber": phoneNumber,
            "userType": user.userType,
            "password": password
        }

        axios.put('/edit', saveObject).then(() => {
                localStorageService.setUser(saveObject);
                setNotify("Profile updated successfully !!!");
                setOpen(true);
            }
        )


        setfirstNameError('');
        setlastNameError('');
        setEmailError('');
        setAddressError('');
        setPasswordError('');
        setPhoneError('');
        setEditable(false);
    };

    return (
        <ProfileContainer>
            <h1>My Profile</h1>
            {
                open &&
                <Snackbar handleClose={handleClose} status={true} message={notify}
                          openStatus={open}/>
            }
            <Textbox>
                <Label>First Name:</Label>
                <Field type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)}
                       readOnly={!editable}/>
                {firstNameError && <ErrorMsg>{firstNameError}</ErrorMsg>}
            </Textbox>
            <Textbox>
                <Label>Last Name:</Label>
                <Field type="text" value={lastName} onChange={(e) => setlastName(e.target.value)} readOnly={!editable}/>
                {lastNameError && <ErrorMsg>{lastNameError}</ErrorMsg>}
            </Textbox>

            <Textbox>
                <Label>Email:</Label>
                <Field type="email" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={true} disabled/>
                {emailError && <ErrorMsg>{emailError}</ErrorMsg>}
            </Textbox>
            <Textbox>
                <Label>Password:</Label>
                <Field type="password" value={password} onChange={(e) => setPassword(e.target.value)} readOnly={!editable}/>
                {passwordError && <ErrorMsg>{passwordError}</ErrorMsg>}
            </Textbox>
            <Textbox>
                <Label>Address:</Label>
                <Field type="text" value={address} onChange={(e) => setAddress(e.target.value)} readOnly={!editable}/>
                {addresError && <ErrorMsg>{addresError}</ErrorMsg>}
            </Textbox>
            <Textbox>
                <Label>Phone Number:</Label>
                <Field type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                       readOnly={!editable}/>
                {phoneError && <ErrorMsg>{phoneError}</ErrorMsg>}
            </Textbox>
            {!editable && <EditButton onClick={handleCancel}>Edit</EditButton>}
            {editable && (
                <div>
                    <SaveButton onClick={handleSave}>Save</SaveButton>
                    <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                </div>
            )}
        </ProfileContainer>
    );
};

export default Profile;
  