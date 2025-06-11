export class PerkItem extends Item {
  async roll() {
    const item = this;

    const speaker = ChatMessage.getSpeaker({ actor: this.actor });
    const label = `[${item.type}] ${item.name}`;

    ChatMessage.create({
      speaker: speaker,
      flavor: label,
      content: item.system.description ?? '',
    });
  }
}