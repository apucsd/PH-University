// const adminPaths = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: " <AdminDashboard />",
//   },
//   {
//     name: "Academic Management",
//     children: [
//       {
//         name: "Create A. Semester",
//         path: "create-academic-semester",
//         element: " <CreateAcademicSemester />",
//       },
//       {
//         name: "Academic Semester",
//         path: "academic-semester",
//         element: " <AcademicSemester />",
//       },
//       {
//         name: "Create A. Faculty",
//         path: "create-academic-faculty",
//         element: " <CreateAcademicFaculty />",
//       },
//       {
//         name: "Academic Faculty",
//         path: "academic-faculty",
//         element: " <AcademicFaculty />",
//       },
//       {
//         name: "Create A. Department",
//         path: "create-academic-department",
//         element: " <CreateAcademicDepartment />",
//       },
//       {
//         name: "Academic Department",
//         path: "academic-department",
//         element: " <AcademicDepartment />",
//       },
//     ],
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: " <CreateAdmin />",
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: " <CreateFaculty />",
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: " <CreateStudent />",
//       },
//       {
//         name: "Create Member",
//         path: "create-member",
//         element: " <CreateStudent />",
//       },
//     ],
//   },
// ];

// const items = adminPaths.reduce((acc, item) => {
//   if (item.name && item.path) {
//     acc.push({
//       key: item.name,
//       label: `<NavLink to={/${item.path}}>${item.name}</NavLink>`,
//     });
//   }
//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: `<NavLink to={/${child.path}}>${child.name}</NavLink>`,
//       })),
//     });
//   }
//   return acc;
// }, []);

// console.log(JSON.stringify(items));
