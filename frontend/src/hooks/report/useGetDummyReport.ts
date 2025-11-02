import { useQuery } from '@tanstack/react-query'
import type { GetReportDto } from '../../types/report/all'
import { getDummyAnalysis, getDummyComments, getDummyOverview } from '../../api/dummy'
import type { ReportCommentsDto } from '../../types/report/comment'

export function useGetDummyOverview({ reportId, enabled }: GetReportDto & { enabled: boolean }) {
    return useQuery({
        queryKey: ['dummyReports', reportId, 'overview'],
        queryFn: () => getDummyOverview({ reportId }),
        enabled: !!reportId && enabled,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        select: (data) => data.result,
    })
}

export function useGetDummyAnalysis({ reportId, enabled }: GetReportDto & { enabled: boolean }) {
    return useQuery({
        queryKey: ['dummyReports', reportId, 'analysis'],
        queryFn: () => getDummyAnalysis({ reportId }),
        enabled: !!reportId && enabled,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        select: (data) => data.result,
    })
}

export function useGetDummyComments({ reportId, commentType, enabled }: ReportCommentsDto & { enabled: boolean }) {
    return useQuery({
        queryKey: ['dummyReports', reportId, 'comments', commentType],
        queryFn: () => getDummyComments({ reportId, commentType }),
        enabled: !!reportId && enabled,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        select: (data) => data.result,
    })
}
