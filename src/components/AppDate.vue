<template>
  <span
    :title="humansFriendlyDate()"
  >
    {{ deffForHumans() }}
  </span>
</template>
<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import localizedDate from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedDate)

export default {
    props: {
        timestamp:{
            required: true,
            type:Number
        }
    },
    methods: {
        deffForHumans(){
          return dayjs.unix(this.timestamp).fromNow()
        },
        humansFriendlyDate(){
          return dayjs.unix(this.timestamp).format('llll')
        }
    }
};
</script>
<style scoped>
</style>