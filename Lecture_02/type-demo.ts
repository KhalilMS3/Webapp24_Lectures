type ID = string;

const id: string = "2"

type HabitObject = {
   id: ID,
   title: string,
   createdAt?: string | Date; //! Optional 
}

const object: HabitObject = {
   id: "1",
   title: "title here",
   /* createdAt: new Date() */ //? Valid
}

type HabitArray = HabitObject[];

const habitArray: HabitArray = [object]

//? Using Pick<> makes it easier to get the datatype of "title" dynamically even if it gets changed 
type HabitTitle = Pick<HabitObject, "title">

//? Omit<> removes (in this case) "id" from all objects of type "CreateHabitDTO" and it's not req. anymore
type CreateHabitDTO = Omit<HabitObject, "id">

// An ID with a specified format
type FancyID = `${string}-${string}-${string}`

const fancyId: FancyID = "test-ny-streng"

type StudentMeta = { name: string, birthYear: number }

type StudentRecord = Record<FancyID, StudentMeta> //? key = FancyID -> Value = StudentMeta e.g ('a-b-c': { name: "Frida", birthYear: 1992 })

type Student = string | StudentRecord


const getStudent = async (
   students: Student[],
   id: FancyID
   ): Promise<StudentRecord | undefined | never> => {
   if (students.every((s) => typeof s === "string")) //! if all elements from students are "string" > throw error
      throw new Error("Can not locate user when all are strings");
   return students
      .filter((student) => typeof student !== "string")
      .find((student) => student[id]);
};

const students: Student[] = [
   "lars", // string
   { 'a-b-c': { name: "Frida", birthYear: 1992 } }, // FancyId - type
]

getStudent(students, "a-b-c").then(data => console.log(data))

console.log("Hey")