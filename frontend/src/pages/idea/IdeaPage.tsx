import Metadata from '../../components/Metadata'
import { META_KEY } from '../../constants/metaConfig'
import { ContentsIdea } from './_components/ContentsIdea'
import { GeneratingIdea } from './_components/GeneratingIdea'

import { TrendKeywords } from './_components/TrendKeywords'
import { dummyTrendData } from './dummy'

export default function IdeaPage() {
    return (
        <div>
            <Metadata metaKey={META_KEY.IDEA} />
            <div className="flex flex-col desktop:py-20 py-10 px-4 tablet:px-[90px] gap-[40px] tablet:gap-[64px] desktop:gap-[40px] self-stretch ">
                <TrendKeywords data={dummyTrendData.data} />
                <GeneratingIdea />
                <ContentsIdea data={dummyTrendData.data} isDummy={false} />
            </div>
        </div>
    )
}
