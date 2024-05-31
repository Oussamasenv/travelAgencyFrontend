import { useState } from "react"
import Modal from "./Modal"

export default function App({deleteFunction, id}) {
  const [open, setOpen] = useState(false)
  return (
    <main className="App">
      <button className="bg-red-500 rounded-lg text-white p-2" onClick={() => setOpen(true)}>
        Delete
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => deleteFunction(id)} className="bg-red-500 rounded-lg text-white p-1 w-full">Delete</button>
            <button
              className="bg-gray-100 rounded-lg text-gray-700 w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </main>
  )
}