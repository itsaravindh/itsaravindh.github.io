let menus =[
    {
        title:"home",
        href:"#home",
        icon:'<i class="fa-solid fa-house"></i>'
    },
    {
        title:"education",
        href:"#education",
        icon:'<i class="fa-solid fa-graduation-cap"></i>'
    },
    {
        title:"skills",
        href:"#skills",
        icon:'<i class="fa-solid fa-code"></i>'
    },
    {
        title:"projects",
        href:"#projects",
        icon:'<i class="fa-solid fa-laptop-code"></i>'
    },
    {
        title:"achivements",
        href:"#achivements",
        icon:'<i class="fa-regular fa-star"></i>'
    }
];

let education =[
    {
        icon:"fa-graduation-cap",
        title:"PG",
        degree:"Master of Computer Science",
        institute:"bishop heber college (autonomous)",
        location:"tiruchirappalli",
        duration:"2024-2026",
        score:"GPA : 7.9",
    },
    {
        icon:"fa-building-columns",
        title:"UG",
        degree:"Bachelor of Computer Science",
        institute:"government arts college (autonomous)",
        location:"kumbakonam",
        duration:"2021-2024",
        score:"GPA : 8.3",
    },
    {
        icon:"fa-book-open",
        title:"HSC",
        degree:"Higher Secondary School",
        institute:"fatima matric hr sec school",
        location:"jayankondam",
        duration:"2019-2021",
        score:"percentage : 86",
    },
    {
        icon:"fa-school",
        title:"SSLC",
        degree:"Secondary School",
        institute:"fatima matric hr sec school",
        location:"jayankondam",
        duration:"2018-2019",
        score:"percentage : 78.2",
    }
];

let pgmlangs =[
    {
        icon:'<i class="fa-brands fa-html5 text-orange-500 mr-2"></i>',
        title:"HTML"
    },
    {
        icon:'<i class="fa-brands fa-css3-alt text-blue-500 mr-2"></i>',
        title:"CSS"
    },
    {
        icon:'<i class="fa-brands fa-js text-yellow-400 mr-2"></i>',
        title:"Java Script"
    },
    {
        icon:'<i class="fa-brands fa-php text-indigo-600"></i>',
        title:"PHP"
    },
    {
        icon:'<i class="fa-brands fa-java text-red-600 mr-2"></i>',
        title:"Java"
    },
];

let database =[
    {
        icon:'<i class="fa-solid fa-database text-green-600 mr-2"></i>',
        title:"MongoDB"
    },
    {
        icon:'<i class="fa-solid fa-database text-blue-600 mr-2"></i>',
        title:"SQL"
    },
    {
        icon:'<i class="fa-solid fa-database text-orange-500 mr-2"></i>',
        title:"MySQL"
    },
    
];

let library =[
    {
        icon:'<i class="fa-brands fa-react text-cyan-400 mr-2"></i>',
        title:"React.js"
    }
    ,
    {
        icon:'<i class="fa-brands fa-node-js text-green-600 mr-2"></i>',
        title:"Node.js"
    },
    {
        icon:'<i class="fa-solid fa-server text-gray-700 mr-2"></i>',
        title:"Express.js"
    },
    {
        icon:'<i class="fa-solid fa-leaf text-green-500 mr-2"></i>',
        title:"Spring Boot"
    },
    {
        icon:'<i class="fa-solid fa-wind text-sky-400 mr-2"></i>',
        title:"TailwindCSS"
    }
];

let tools =[
    {
        icon:'<i class="fa-brands fa-git-alt text-red-500 mr-2"></i>',
        title:"git"
    },
    {
        icon:'<i class="fa-brands fa-github text-black mr-2"></i>',
        title:"Git-Hub"
    },
    {
        icon:'<i class="fa-brands fa-figma text-pink-500 mr-2"></i>',
        title:"Figma"
    },
    {
        icon:'<i class="fa-solid fa-code text-blue-500 mr-2"></i>',
        title:"VS Code"
    },
    {
        icon:'<i class="fa-solid fa-server text-orange-600 mr-2"></i>',
        title:"xampp"
    }
]
let project =[];

let achievements =[];

let contact =[
    {
        label: "Phone",
        icon:'<i class="fa-solid fa-phone"></i>',
        title:"+91 9363302574",
        href:""
    },
    {
        label: "Mail",
        icon:'<i class="fa-solid fa-envelope"></i>',
        title:"taravindh1801@gmail.com",
        href:""
    },
    {
        label: "LinkedIn",
        icon:'<i class="fa-brands fa-linkedin-in"></i>',
        title:"https://www.linkedin.com/in/aravindh1801",
        href:"https://www.linkedin.com/in/aravindh1801"
    },
    {
        label:"Git-Hub",
        icon:'<i class="fa-brands fa-github"></i>',
        title:"https://github.com/itsaravindh",
        href:"https://github.com/itsaravindh"
    },
];

let skill = document.querySelector('.skill');

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const icon = menuBtn.querySelector("i");
const menu = document.querySelector('.mobilemenus');
menus.map((i,k)=>
{
    let a = document.createElement('a');
    a.innerHTML=i.icon+i.title;
    a.href=i.href;        
    a.className='flex gap-1 capitalize items-center mobile-link hover:text-blue-600'
    menu.append(a);
})

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
});

document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

function menusRender()
{
    let menu = document.querySelector('.menus');
    menus.map((i,k)=>
    {
        let a = document.createElement('a');
        a.innerHTML=i.icon+i.title;
        a.href=i.href;
        a.className='flex gap-1 items-center hover:text-blue-600 transition';
        menu.append(a);
    })
}
menusRender();

function educationRender()
{
    let edu = document.querySelector('.education');
    let tem = document.getElementById('template');

    education.map((i,j)=>
    {
        let clone = tem.content.cloneNode(true);
        clone.querySelector('.title').textContent=i.title;
        clone.querySelector('.degree').textContent=i.degree;
        clone.querySelector('.institute').textContent=i.institute;
        clone.querySelector('.location').textContent=i.location;
        clone.querySelector('.duration').textContent=i.duration;
        clone.querySelector('.score').textContent=i.score;
        clone.querySelector('.iconedu').classList.add(i.icon);
        edu.appendChild(clone);
    })
}
educationRender();

function skilRender()
{
    let pgmlang = document.querySelector('.pgmlang');
    let frmlib = document.querySelector('.frmlib');
    let db = document.querySelector('.db');
    let tool = document.querySelector('.tools');

    pgmlangs.map((i,j)=>
    {
        let span = document.createElement('span');
        span.innerHTML=i.icon+i.title;
        span.className='skill';
        pgmlang.append(span);
    })
    library.map((i,j)=>
    {
        let span = document.createElement('span');
        span.innerHTML=i.icon+i.title;
        span.className='skill';
        frmlib.append(span);
    })
    database.map((i,j)=>
    {
        let span = document.querySelector('span');
        span.innerHTML=i.icon+""+i.title;
        span.className='skill';
        db.append(span);
    })
    tools.forEach((i,k)=>
    {
        let span = document.createElement('span');
        span.innerHTML=i.icon+i.title;
        span.className='skill';
        tool.append(span);
    })
    
}
skilRender();

function contactRender()
{
    let info = document.getElementById('cinfo');
    let temp = document.getElementById('contactTemplate');
    contact.map((i,k)=>
    {
        let clone = temp.content.cloneNode(true);
        clone.querySelector(".label").innerHTML = i.label;
        clone.querySelector(".icon").innerHTML=i.icon;
        const link = clone.querySelector(".value");
        link.textContent = i.title;
        link.href = i.href;

    if (i.label !== "Phone") {
        link.target = "_blank";
    }

    info.appendChild(clone);
    })
}
contactRender();