let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

const printFindCommonCourses = () => {
    const commonCourses = student1Courses.filter((course) => student2Courses.includes(course));
    const resultContainer = document.getElementById('result-filter-includes');
    if (commonCourses.length > 0) {
        resultContainer.textContent = `Cursos en común: ${commonCourses.join(', ')}`;
    } else {
        resultContainer.textContent = "No hay cursos en común.";
    }
};
printFindCommonCourses()