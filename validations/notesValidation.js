import * as yup from 'yup';

export const notesSchema = yup.object().shape({
    title: yup.string(),
    date: yup.string(),
    category: yup.string(),
    content: yup.string(),
    status: yup.string()
}).noUnknown()

export const createNewNotesSchema = yup.object().shape({
    title: yup.string().required(),
    date: yup.string().required(),
    category: yup.string().required(),
    content: yup.string().required(),
    created: yup.string().default(function () {
        return new Date().toLocaleDateString('en-GB')
    }),
    status: yup.string().required()
}).noUnknown()

