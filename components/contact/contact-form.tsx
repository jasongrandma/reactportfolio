import { useMemo, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import sc from 'styled-components/native';

import { portfolioTheme } from '@/styles/portfolioTheme';

type FormState = {
    name: string;
    email: string;
    message: string;
};

const FormShell = sc.View`
  width: 100%;
  max-width: 760px;
  align-self: center;
  background-color: ${portfolioTheme.colors.card};
  border-radius: ${portfolioTheme.radius.lg}px;
  border-width: 1px;
  border-color: ${portfolioTheme.colors.border};
  padding: ${portfolioTheme.spacing.lg}px;
  gap: ${portfolioTheme.spacing.md}px;
`;

const Label = sc.Text`
  font-family: ${portfolioTheme.fonts.body};
  font-size: 15px;
  color: ${portfolioTheme.colors.textPrimary};
`;

const ErrorText = sc.Text`
  color: ${portfolioTheme.colors.error};
  font-size: 13px;
  font-family: ${portfolioTheme.fonts.body};
`;

const SuccessText = sc.Text`
  color: ${portfolioTheme.colors.success};
  font-size: 14px;
  font-family: ${portfolioTheme.fonts.body};
`;

const SubmitText = sc.Text`
  color: ${portfolioTheme.colors.textOnBrand};
  font-size: 16px;
  font-family: ${portfolioTheme.fonts.body};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  text-align: center;
`;

const initialState: FormState = {
    name: '',
    email: '',
    message: '',
};

export function ContactForm() {
    const [form, setForm] = useState<FormState>(initialState);
    const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
        name: false,
        email: false,
        message: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const errors = useMemo(() => {
        const result: Partial<Record<keyof FormState, string>> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.name.trim()) result.name = 'Please enter your name.';
        if (!emailRegex.test(form.email.trim())) result.email = 'Please enter a valid email address.';
        if (form.message.trim().length < 10) {
            result.message = 'Message must be at least 10 characters long.';
        }

        return result;
    }, [form]);

    const hasErrors = Object.keys(errors).length > 0;

    const handleSubmit = () => {
        setTouched({ name: true, email: true, message: true });
        setSubmitted(true);

        if (hasErrors) return;

        setForm(initialState);
    };

    return (
        <FormShell>
            <Label>Name</Label>
            <TextInput
                value={form.name}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                onChangeText={(name) => setForm((prev) => ({ ...prev, name }))}
                placeholder="Your name"
                style={{
                    borderWidth: 1,
                    borderColor: portfolioTheme.colors.border,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                }}
            />
            {touched.name && errors.name ? <ErrorText>{errors.name}</ErrorText> : null}

            <Label>Email</Label>
            <TextInput
                value={form.email}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                onChangeText={(email) => setForm((prev) => ({ ...prev, email }))}
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                    borderWidth: 1,
                    borderColor: portfolioTheme.colors.border,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                }}
            />
            {touched.email && errors.email ? <ErrorText>{errors.email}</ErrorText> : null}

            <Label>Message</Label>
            <TextInput
                value={form.message}
                onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                onChangeText={(message) => setForm((prev) => ({ ...prev, message }))}
                placeholder="Tell me about your project"
                multiline
                numberOfLines={4}
                style={{
                    minHeight: 120,
                    borderWidth: 1,
                    borderColor: portfolioTheme.colors.border,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 10,
                    textAlignVertical: 'top',
                }}
            />
            {touched.message && errors.message ? <ErrorText>{errors.message}</ErrorText> : null}

            <Pressable
                onPress={handleSubmit}
                style={{
                    backgroundColor: portfolioTheme.colors.brand,
                    borderRadius: 12,
                    paddingVertical: 12,
                    marginTop: 4,
                }}>
                <SubmitText>Send Message</SubmitText>
            </Pressable>

            {submitted && !hasErrors ? (
                <SuccessText>Thanks, your message was validated and submitted successfully.</SuccessText>
            ) : null}
        </FormShell>
    );
}