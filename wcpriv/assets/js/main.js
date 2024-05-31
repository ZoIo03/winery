const channelCardTemplate = document.querySelector("[data-channel-template]")
const channelCardContainer = document.querySelector("[data-item-container]")
const searchBar = document.querySelector("[search-bar]")

let channels = []

searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  channels.forEach(channel => {
    const isVisible = channel.channel_number.toLowerCase().includes(value) || channel.name.toLowerCase().includes(value)
    user.element.classList.toggle("hidden", !isVisible)
  })
})

fetch("assets/json/channels.json")
  .then(res => res.json())
  .then(data => {
    channel = data.map(channel => {
      const card = channelCardTemplate.content.cloneNode(true).children[0]
      const channelNumber = card.querySelector("[channel-number]")
      const name = card.querySelector("[channel-name]")
      const icon = card.querySelector("[channel-icon]")
      const groupIcon = card.querySelector("[group-icon]")
      const link = card.querySelector("[button-link]")
      channelNumber.textContent = channel.channel_number
      name.textContent = channel.name
      icon.setAttribute("src", channel.icon);
      groupIcon.setAttribute("src", channel.group_icon);
      link.setAttribute("href", channel.link);
      channelCardContainer.append(card)
      return { channelNumber: channel.number, name: channel.name, element: card }
    })
  })

  