export const finedEditRow = (note, body) => {
	const { title, category, content, date, status } = body;
    if (title) note.title = title;
    if (category) note.category = category;
    if (content) note.content = content;
    if (date) note.date = date;
    if (status) note.status = status;
};
