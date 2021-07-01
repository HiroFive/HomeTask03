function validation(schema) {
	return async (req, res, next) => {
		try {
			const validatedBody = await schema.validate(req.body, {strict: true, abortEarly: false});
			req.body = validatedBody;
			next();
		} catch (error) {
			res.status(400).json({ error });
		}
	};
}

export default validation;
