import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'Навыки',
    description: 'Generated by create next app',
  }
const SkillsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="bg-[#1f1f1f] text-white min-h-screen py-[300px]">
        <h1>МОИ НАВЫКИ</h1>
        {children}
        </div>
  )
}

export default SkillsLayout