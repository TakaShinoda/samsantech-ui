// フォーカス時にフラグの切り替えとイベントのemitを行う

// getCurrentInstance setup内で呼び出せる関数
// 呼び出されたsetupを持つvueのインスタンスを取得する
import { getCurrentInstance, ref } from 'vue'

export const useFocus = (
    focus: {
        eventName: string
    },
    blur: {
        eventName: string
    }
) => {
    const emit = getCurrentInstance()?.emit
    const isFocus = ref(false)

    const handleFocus = (value?: unknown) => {
        if(!emit) return
        isFocus.value = true

        emit(focus.eventName, value)
    }

    const handleBlur = (value?: unknown) => {
        if(!emit) return
        isFocus.value = false

        emit(blur.eventName, value)
    }

    return {
        isFocus,
        handleFocus,
        handleBlur
    }
}