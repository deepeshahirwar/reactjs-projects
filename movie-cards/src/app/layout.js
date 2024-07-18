 "use client";
 import { MoviesCard } from "./MoviesCard"
 import './globals.css'
 
 export default function RootLayout(){
  return (
    <html lang="en">
      <body className="bg-slate-900">
        <MoviesCard/>
      </body>
    </html>
  )
}