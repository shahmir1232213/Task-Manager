const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "employee1@example.com",
    password: "password123",
    taskCount: {
      active: 3,
      new: 3,
      completed: 0,
      failed: 1
    },
    tasks: {
      active: [
        {
          taskId: 101,
          title: "Update Project Report",
          deadline: "2024-09-05"
        },
        {
          taskId: 110,
          title: "Fix Login Bug",
          deadline: "2024-09-06"
        },
        {
          taskId: 111,
          title: "Deploy New Feature",
          deadline: "2024-09-07"
        }
      ],
      new: [
        {
          taskId: 102,
          title: "Prepare Presentation",
          deadline: "2024-09-06"
        },
        {
          taskId: 103,
          title: "Conduct Team Meeting",
          deadline: "2024-09-09"
        },
        {
          taskId: 112,
          title: "Write Test Cases",
          deadline: "2024-09-10"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "employee2@example.com",
    password: "password456",
    taskCount: {
      active: 3,
      new: 3,
      completed: 1,
      failed: 0
    },
    tasks: {
      active: [
        {
          taskId: 104,
          title: "Complete Documentation",
          deadline: "2024-09-10"
        },
        {
          taskId: 113,
          title: "Debug API Issues",
          deadline: "2024-09-11"
        },
        {
          taskId: 114,
          title: "Enhance Security Measures",
          deadline: "2024-09-12"
        }
      ],
      new: [
        {
          taskId: 105,
          title: "Review Code Changes",
          deadline: "2024-09-07"
        },
        {
          taskId: 106,
          title: "Update API Endpoints",
          deadline: "2024-09-12"
        },
        {
          taskId: 115,
          title: "Refactor Database Schema",
          deadline: "2024-09-14"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Shahmir",
    email: "shahmir.siddiqui.b@gmail.com",
    password: "123",
    taskCount: {
      active: 3,
      new: 3,
      completed: 2,
      failed: 0
    },
    tasks: {
      active: [
        {
          taskId: 107,
          title: "Fix UI Bugs",
          deadline: "2024-09-08"
        },
        {
          taskId: 116,
          title: "Improve UX Design",
          deadline: "2024-09-09"
        },
        {
          taskId: 117,
          title: "Integrate Payment Gateway",
          deadline: "2024-09-11"
        }
      ],
      new: [
        {
          taskId: 108,
          title: "Optimize Database Queries",
          deadline: "2024-09-11"
        },
        {
          taskId: 109,
          title: "Refactor Backend Code",
          deadline: "2024-09-14"
        },
        {
          taskId: 118,
          title: "Migrate to Cloud",
          deadline: "2024-09-15"
        }
      ]
    }
  },
  {
    id: 4,
    name: "Michael Lee",
    email: "michael.lee@example.com",
    password: "pass789",
    taskCount: {
      active: 3,
      new: 3,
      completed: 3,
      failed: 1
    },
    tasks: {
      active: [
        {
          taskId: 119,
          title: "Create Landing Page",
          deadline: "2024-09-10"
        },
        {
          taskId: 120,
          title: "Optimize SEO Performance",
          deadline: "2024-09-12"
        },
        {
          taskId: 121,
          title: "Update CMS Plugins",
          deadline: "2024-09-14"
        }
      ],
      new: [
        {
          taskId: 122,
          title: "Write Blog Content",
          deadline: "2024-09-16"
        },
        {
          taskId: 123,
          title: "Improve Accessibility Features",
          deadline: "2024-09-18"
        },
        {
          taskId: 124,
          title: "Conduct UX Research",
          deadline: "2024-09-20"
        }
      ]
    }
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    password: "emma123",
    taskCount: {
      active: 2,
      new: 0,
      completed: 4,
      failed: 0
    },
    tasks: {
      active: [
        {
          taskId: 125,
          title: "Manage Client Communications",
          deadline: "2024-09-08"
        },
        {
          taskId: 126,
          title: "Organize Team Workshop",
          deadline: "2024-09-10"
        },
      ],
      new: []
    }
  }
];
const admin = {
  id: 1,
  email: "admin@gmail.com",
  password: "123"
};

export function setLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export function getLocalStorage() {
  let employees = JSON.parse(localStorage.getItem("employees"));
  let admin = JSON.parse(localStorage.getItem("admin"));
  return {
    employees,
    admin
  };
}
