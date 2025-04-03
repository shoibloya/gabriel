// lib/tasks.ts
export type Task = {
  id: number
  title: string
  description: string
  date: string
  completed?: boolean
  location?: string
  tags?: string[]
  colorIndex?: number
}
  
  export const tasks: Task[] = [
    {
      id: 1,
      title: "Subscription Start",
      description: "Start of subscription",
      date: "2025-03-24T00:00:00Z",
      colorIndex: 4,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true, 
    },
    {
      id: 2,
      title: "Website Analysed",
      description: "Nuggt team published the website and created the blog strategy.",
      date: "2025-04-03T00:00:00Z",
      colorIndex: 4,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true, 
    },
  
  
    {
        id: 3,
        title: "First Blog Post",
        description: "How to Use Your CPF for Investments in Singapore (2025 Guide).",
        date: "2025-04-11T00:00:00Z",
        colorIndex: 2,
        //location: "Conference Room A",
        tags: ["Blog"],
        completed: false,
    },
    
    {
      id: 4,
      title: "Second Blog Post",
      description: "Legacy Planning in Singapore: What Happens to Your CPF When You Pass Away?",
      date: "2025-04-11T00:00:00Z",
      colorIndex: 2,
      //location: "Zoom",
      tags: ["Blog"],
      completed: false,
    },
    {
        id: 5,
        title: "Third Blogpost",
        description: "What to Include on a Business Card in 2025 (Singapore Edition)",
        date: "2025-04-18T00:00:00Z",
        colorIndex: 2,
        //location: "Zoom",
        tags: ["Blog"],
        completed: false,
      },
    {
      id: 6,
      title: "Fourth Blog Post",
      description: "Business Card Paper Types Explained: How to Choose the Right One in Singapore",
      date: "2025-04-18T00:00:00Z",
      colorIndex: 2,
      //location: "Production",
      tags: ["Blog"],
      completed: false,
    },
    
    {
      id: 7,
      title: "Monthly Report",
      description: "Summary report of the first month of subscription. Analysis of how each blog article performed. Directions for next month.",
      date: "2025-04-23T00:00:00Z",
      colorIndex: 4,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },


    {
      id: 8,
      title: "Subscription Renewable",
      description: "Subscription Renew Date",
      date: "2025-04-24T00:00:00Z",
      colorIndex: 3,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },
  ];
  