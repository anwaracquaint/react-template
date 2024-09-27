import axios from "axios";

const baseUrl: string = "http://localhost:8080";

const getHeaders = () =>
{
    return {
        'Content-Type': 'application/json',
        authorization: "this is the token for now",
    }
}

export const Http = {
    get: (endPoint: string, msg: boolean) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios({
                method: "GET",
                url: baseUrl + endPoint,
                headers: getHeaders(),
            }).then((res: any) =>
            {
                resolve(res)
            }).catch((err: any) =>
            {
                reject(err)
                console.error("err", err);
            })
        })
    },
    post: (endPoint: string, msg: boolean, data: any) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios({
                method: "POST",
                url: baseUrl + endPoint,
                data: data,
                headers: getHeaders()
            }).then((res: any) =>
            {
                resolve(res)
            }).catch((err: any) =>
            {
                reject(err)
                console.log("err", err)
            })
        })
    },
    put: (endPoint: string, msg: boolean, data: any) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios({
                method: "PUT",
                url: baseUrl + endPoint,
                data: data,
                headers: getHeaders()
            }).then((res: any) =>
            {
                resolve(res)
            }).catch((err: any) =>
            {
                reject(err)
                console.log("err", err)
            })
        })
    },
    delete: (endPoint: string, msg: boolean, data?: any) =>
    {
        return new Promise((resolve, reject) =>
        {
            axios({
                method: "DELETE",
                url: baseUrl + endPoint,
                data: data,
                headers: getHeaders()
            }).then((res: any) =>
            {
                resolve(res)
            }).catch((err: any) =>
            {
                reject(err)
                console.log("err", err)
            })
        })
    }
}
