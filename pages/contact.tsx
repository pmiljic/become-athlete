import { useRouter } from 'next/router'
import Head from 'next/head'

import { Container, Input, Button, Text } from '@components/ui'
import { Layout } from '@components/common'

import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from "axios"

import {
    ContactContainer,
    InputContainer,
    ContactInfo,
    ButtonDiv
} from '@styles/contact.styles'

export default function Contact() {
    const router = useRouter()
    return (
        <Container>
            <Head>
                <title>
                    Contact | Become Athlete
                </title>
            </Head>
            <ContactContainer>
                <ContactInfo>
                    <Text variant="pageHeading">Get in touch.</Text>
                    <Text variant="body">Have any question? Don't hesitate to contact me.</Text>
                </ContactInfo>
                <Formik
                    initialValues={{ fullName: '', email: '', subject: '', message: '' }}
                    validationSchema={Yup.object({
                        fullName: Yup.string()
                            .max(34, 'Must be 35 characters or less')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address')
                            .max(34, 'Must be 35 characters or less')
                            .required('Required'),
                        subject: Yup.string()
                            .max(34, 'Must be 35 characters or less')
                            .required('Required'),
                        message: Yup.string()
                            .max(399, 'Must be 800 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        const res = axios({
                            method: "post",
                            url: "/api/contact/contact",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            data: {
                                fullName: values.fullName,
                                mail: values.email,
                                subject: values.subject,
                                message: values.message
                            }
                        })
                            .then(() => {
                                setSubmitting(false)
                                router.push('/contact-success')
                            })
                            .catch(err => {
                                alert(
                                    'There was an issue with our server. Plase contact us via social media, until we solve the problem.'
                                )
                            })
                    }}
                >
                    <Form>
                        <InputContainer>
                            <Input
                                label="Full Name *"
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                maxLength={35}
                            />
                            <Input
                                label="Email *"
                                name="email"
                                type="email"
                                placeholder="Email"
                                maxLength={35}
                            />
                            <Input
                                label="Subject *"
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                maxLength={35}
                            />
                        </InputContainer>
                        <Input
                            label="Message *"
                            name="message"
                            type="text"
                            placeholder="Message"
                            isTextArea
                            maxLength={400}
                        />
                        <ButtonDiv>
                            <Button type="submit">Submit</Button>
                        </ButtonDiv>
                    </Form>
                </Formik>
            </ContactContainer>
        </Container>
    )
}

Contact.Layout = Layout
