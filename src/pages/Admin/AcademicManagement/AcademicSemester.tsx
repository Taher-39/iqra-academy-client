import { useGetAllAcademicSemesterQuery } from "../../../redux/features/AcademicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is AcademicSemester Component</h1>
    </div>
  );
};

export default AcademicSemester;
