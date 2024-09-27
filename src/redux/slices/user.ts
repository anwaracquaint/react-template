import { createSlice } from '@reduxjs/toolkit'

export interface User
{
    name: string
    user: any
}

const userData: any = localStorage.getItem('user')
const isUser = JSON.parse(userData || null)

const initialState: User = {
    name: "Anwar Shaikh",
    user: isUser
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) =>
        {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload
        }
    }
})

export const { userLogin } = userSlice.actions
export default userSlice.reducer