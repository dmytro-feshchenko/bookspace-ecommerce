import { AppProps as NextAppProps } from 'next/app'
import { EmotionCache } from '@emotion/utils'

type EmotionCacheProps = {
  emotionCache: EmotionCache,
}

export type NextAppPropsWithEmotionCache = NextAppProps & EmotionCacheProps