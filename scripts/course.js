const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createCoursesButton(filteredCourses) {
    let container = document.querySelector(".certs");
    let totalCreditsElement = document.querySelector("#total-credits");
  
    container.innerHTML = "";
  
    filteredCourses.forEach(course => {
      let button = document.createElement("button");
      button.innerHTML = `${course.subject} ${course.number} - ${course.title} ${course.completed ? '✔️' : ''}`;
      button.classList.add(course.completed ? "complete" : "incomplete");
      button.classList.add("course-button");

      button.addEventListener("click", () => {
        displayDetails(course);
      })
      container.appendChild(button);
    });

    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = totalCredits;
  }
  
  createCoursesButton(courses);
  
  const allLink = document.querySelector("#all")
  const cseLink = document.querySelector("#cse")
  const wddLink = document.querySelector("#wdd")
  
  allLink.addEventListener("click", (event) => {
    event.preventDefault();
    createCoursesButton(courses);
  });
  
  cseLink.addEventListener("click", (event) => {
    event.preventDefault();
    const cseCourses = courses.filter(course => course.subject === "CSE");
    createCoursesButton(cseCourses);
  });
  
  wddLink.addEventListener("click", (event) => {
    event.preventDefault();
    const wddCourses = courses.filter(course => course.subject === "WDD");
    createCoursesButton(wddCourses);
  });

function displayDetails(courses) {
    let courseDetails = document.querySelector("#course-details");
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">✖️</button>
    <h2>${courses.subject} ${courses.number}</h2>
    <h3>${courses.title}</h3>
    <p><strong>Credits</strong>: ${courses.credits}</p>
    <p><strong>Certificate</strong>: ${courses.certificate}</p>
    <p>${courses.description}</p>
    <p><strong>Technologies</strong>: ${courses.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        courseDetails.close();
    });
}    