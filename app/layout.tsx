
import "./global.css"

export const metadata = {
  title: "F1GPT",
  description: "F1GPT is a GPT-3 powered F1 simulator that allows you to simulate the performance of your F1 car in real-time.",

}

const RootLayout =({children}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout