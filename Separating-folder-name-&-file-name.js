// // you need to create 2 different arrays one will have files and other will have folders

const data = [
  {
    id: "1",
    name: "Documents",
    isFolder: true,
    items: [
      {
        id: "1.1",
        name: "Resume.pdf",
        isFolder: false,
      },
      {
        id: "1.2",
        name: "Projects",
        isFolder: true,
        items: [
          {
            id: "1.2.1",
            name: "Project1.docx",
            isFolder: false,
          },
          {
            id: "1.2.2",
            name: "Designs",
            isFolder: true,
            items: [
              {
                id: "1.2.2.1",
                name: "logo.png",
                isFolder: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Music",
    isFolder: true,
    items: [
      {
        id: "2.1",
        name: "song1.mp3",
        isFolder: false,
      },
      {
        id: "2.2",
        name: "song2.mp3",
        isFolder: false,
      },
    ],
  },
  {
    id: "3",
    name: "Readme.txt",
    isFolder: false,
  },
];

const files = [];
const folders = [];

function traverse(items) {
  items.forEach((item) => {
    if (item.isFolder) {
      folders.push(item.name); // Add folder name
      traverse(item.items); // Recurse into folder
    } else {
      files.push(item.name); // Add file name
    }
  });
}

traverse(data);

console.log("Folders:", folders);
console.log("Files:", files);
