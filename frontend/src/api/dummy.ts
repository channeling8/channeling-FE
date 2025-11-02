import { publicAxiosInstance } from './axios'
import type { GetReportDto, ResponseReportAnalysis, ResponseReportOverview } from '../types/report/all'
import type { ReportCommentsDto, ResponseReportComments } from '../types/report/comment'

export const getDummyOverview = async ({
    reportId,
    section = 'OVERVIEW',
}: GetReportDto): Promise<ResponseReportOverview> => {
    const { data } = await publicAxiosInstance.get(`/dummies/${reportId}/${section}`)
    return data
}

export const getDummyAnalysis = async ({
    reportId,
    section = 'ANALYSIS',
}: GetReportDto): Promise<ResponseReportAnalysis> => {
    const { data } = await publicAxiosInstance.get(`/dummies/${reportId}/${section}`)
    return data
}

export const getDummyComments = async ({
    reportId,
    commentType,
}: ReportCommentsDto): Promise<ResponseReportComments> => {
    const { data } = await publicAxiosInstance.get(`/dummies/${reportId}/comments`, {
        params: { commentType },
    })
    return data
}
