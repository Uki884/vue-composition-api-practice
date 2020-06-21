<template>
  <div class="component-list">
    <!--ボタン-->
    <div class="component-list__item">
      <div class="component-list__item__head">
        <span>Button</span>
      </div>
      <div class="component-list__item__list">
        <BaseButton text="ボタン" width="50" />
        <BaseButton color="black" text="ボタン" width="50" />
        <BaseButton color="red" text="ボタン" width="50" />
        <BaseButton color="blue" text="ボタン" width="50" />
        <BaseButton color="yellow" text="ボタン" width="50" />
      </div>
    </div>
    <!--テキストフィールド-->
    <div class="component-list__item">
      <div class="component-list__item__head">
        <span>TextInput</span>
      </div>
      <BaseInput />
    </div>
    <!--チェックボックス-->
    <div class="component-list__item">
      <div class="component-list__item__head">
        <span>CheckBox</span>
      </div>
      <div class="component-list__item__list">
        <BaseCheckBox />
        <BaseCheckBox color="green" />
        <BaseCheckBox color="blue" />
        <BaseCheckBox color="yellow" />
        <BaseCheckBox color="red" />
        <BaseCheckBox color="black" />
      </div>
    </div>
    <!--ドロップダウン-->
    <div class="component-list__item">
      <div class="component-list__item__head">
        <span>Dropdown</span>
      </div>
      <div class="component-list__item__list">
        <BaseDropdown>
          <template slot="button">
            <BaseButton color="black" text="ボタン" width="50" />
          </template>
          <template slot="item">
            <b-dropdown-item v-for="(dropdown, index) in priorityDropdownList" :key="index" @click="click(dropdown.status)">
              {{ dropdown.text }}
            </b-dropdown-item>
          </template>
        </BaseDropdown>
      </div>
    </div>
    <!--カレンダー-->
    <div class="component-list__item">
      <div class="component-list__item__head">
        <span>Calendar</span>
      </div>
      <div class="component-list__item__list">
        <BaseCalndar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  SetupContext
} from "@vue/composition-api";

import useTodo from '@/modules/Todo/index.ts';

import BaseButton from '@/components/Atoms/BaseButton.vue';
import BaseInput from '@/components/Atoms/BaseInput.vue';
import BaseCheckBox from '@/components/Atoms/BaseCheckBox.vue';
import BaseDropdown from '@/components/Atoms/BaseDropdown.vue';
import BaseCalndar from '@/components/Atoms/BaseCalendar.vue';

type Props = {
  size: string;
};

export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    BaseCheckBox,
    BaseDropdown,
    BaseCalndar
  },
  props: {
    size: {
      type: String,
      default: ''
    },
  },
  setup(props: Props, context: SetupContext) {
    return {
      ...useTodo(context)
    };
  }
})
</script>

<style lang="scss" scoped>
.component-list {
  padding: 24px;
  height: 100%;
  &__item {
    text-align: left;
    margin-bottom: 12px;
    &__head {
      padding-bottom: 8px;
      text-decoration:underline;
      span {
        font-size: 14px;
      }
    }
    &__list {
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>