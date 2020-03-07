const projects = (res, rej, next) => {
    res.render('index', { title: 'projects' });

}
module.exports = {
    projects
};