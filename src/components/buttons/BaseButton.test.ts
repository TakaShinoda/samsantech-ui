import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

// describe(テストの概要, テスト自体をコールバックで受け取り)
// 1つの関心ごとに対して1つ定義すると良い、また、ネストできる
describe('BaseBUtton', () => {
    // test(テストケース詳細, テスト自体のコールバック)
    test('Whether the contents of the slot will be rendered.', () => {
        // mount コンポーネントとコンポーネントオプションを受けとって擬似的にマウントする関数
        const wrapper = mount(BaseButton, {
            // slotsコンテンツに何を渡すか指定
            slots: {
                default: 'ボタン'
            }
        })
        // 引数にテスト対象を受け取る
        // toContain引数で受け取った文字列が存在するか
        expect(wrapper.html()).toContain('ボタン')
    })

    test('The click event will be emited.', () => {
        const wrapper = mount(BaseButton, {
            slots: {
                default: 'ボタン'
            }
        })
        // find 引く数で受けとったセレクタで検索してその要素を返す
        // trigger マウント対象が持つイベンとを発火
        wrapper.find('button').trigger('click')
        // emitted 内部で動作したemitイベントを記録、記録されたイベントをオブジェクトにして返す
        expect(wrapper.emitted().click).toBeTruthy()
    })
})