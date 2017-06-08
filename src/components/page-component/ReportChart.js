import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Sample Chart',
          backgroundColor: '#f87979',
          data: [19, 20, 12, 21, 10, 20, 22, 23, 18, 10, 12, 11]
        }
      ]
    })
  }
})
