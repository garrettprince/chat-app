import { useRouter } from "next/router";


export default function SignUp() {
  const router = useRouter();

    const handleSubmit = () => {
        router.push('/')
    }
    


  return (
    <div>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />

        <button onSubmit={handleSubmit}>Home</button>
        </form>
    </div>
  );
}
