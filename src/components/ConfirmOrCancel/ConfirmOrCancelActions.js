import axios from 'axios';

export const changeTalkStatus = (talkId, selectedStatus, speakerToken) => {
    console.log(1)
    return {
        type: 'SUBMIT_STATUS',
        payload: axios.get('api/robotLogin')
            .then(accessToken => {
                console.log('this is accessToken in cnc action: ', accessToken.data.id)
                axios({
                    method: 'put',
                    url: 'api/talks/changeTalkStatus',
                    headers: {
                        Authorization: accessToken.data.id
                    },
                    data: {
                        talkId,
                        selectedStatus
                    }
                }).then(response => {
                        console.log('this is 2nd accessToken in cnc action: ', accessToken.data.id)

                        console.log(3)
                        axios({
                            method: 'delete',
                            url: (`api/accessTokens/${speakerToken}`),
                            headers: { 
                                Authorization: accessToken.data.id
                            },
                            data: {
                                speakerToken: speakerToken,
                            }
                        })
                    })
            })
    }
}

export const handleSpeakerToken = (t) => {
    return {
        type: 'HANDLE_SPEAKER_TOKEN',
        payload: t
    }
}

export const handleTalkId = (id) => {
    return {
        type: 'HANDLE_TALK_ID',
        payload: id
    }
}

                //copy
                // export const changeTalkStatus = (talkId, selectedStatus, speakerToken) => {
                //     return {
                //         type: 'SUBMIT_STATUS',
                //         payload: axios({
                //             method: 'put',
                //             url: 'api/talks/changeTalkStatus',
                //             headers: {
                //                 Authorization: speakerToken
                //             },
                //             data: {
                //                 talkId,
                //                 selectedStatus
                //             }
                //         }).then(
                //             axios.post('http://localhost:3000/api/organizers/login', { username: process.env.ADMIN_USERNAME, password: process.env.ADMIN_PASSWORD, ttl: 60 * 5 })
                //                 .then(response => {
                //                     console.log('inside the .then of api/organizers/login')
                //                     return response.data.id
                //                 }).then(accessToken => {
                //                     console.log('this is accesstoken: ', accessToken)
                //                     res.forEach(speaker => {
                //                         console.log('this is speaker: ', speaker)
                //                         console.log('inside the second .then')
                //                     })
                //                 }).then(accessToken => {
                //                     axios({
                //                         method: 'delete',
                //                         url: ('api/accessTokens/' + speakerToken + '?access_token=' + accessToken),
                //                         headers: {
                //                             Authorization: accessToken
                //                         }
                //                     })
                //                 })
                //         )
                //     }
                // }