# Project: Blackjack

from random import shuffle

def create_deck():
    deck = []
    face_values = ["A", "J", "Q", "K"]
    for i in range(4):
        for card in range(2, 11):
            deck.append(str(card))
        for card in face_values:
            deck.append(str(card))
    shuffle(deck)
    return deck

class Player:
    def __init__(self, hand = [], money = 100):
        self.hand = hand
        self.score = self.set_score()
        self.money = money
        self.bet = 0
    def __str__(self):
        current_hand = ""
        for card in self.hand:
            current_hand += str(card) + " "
        final_status = current_hand + f"score: {str(self.score)}"
        return final_status
    def set_score(self):
        self.score = 0
        face_cards_deck = {
            "A": 11, "J": 10, "Q": 10,"K": 10,
            "2": 2, "3": 3, "4": 4, "5": 5,
            "6": 6, "7": 7, "8": 8, "9": 9, "10": 10
        }
        ace_counter = 0
        for card in self.hand:
            self.score += face_cards_deck[card]
            if card == "A":
                ace_counter += 1
            if self.score > 21 and ace_counter != 0:
                self.score -= 10
                ace_counter -= 1
        return self.score
    def hit(self, card):
        self.hand.append(card)
        self.score = self.set_score()
    def play(self, newHand):
        self.hand = newHand
        self.score = self.set_score()
    def bet(self, amount):
        self.money -= amount
        self.bet += amount
    def win(self, result):
        if result == True:
            if self.score == 21 and len(self.hand) == 2:
                self.money += 2.5 * self.bet
            else:
                self.money += 2 * self.bet
            self.bet = 0
        else:
            self.bet = 0
    def draw(self):
        self.money += self.bet
        self.bet = 0
    def has_black_jack(self):
        return True if self.score == 21 and len(self.hand) == 21 else False
def print_house(house):
    for card in range(len(house.hand)):
        if card == 0:
            print("X", end = " ")
        elif card == len(house.hand) - 1:
            print(house.hand[card])
        else:
            print(house.hand[card], end = "")
card_deck = create_deck()
first_hand = [card_deck.pop(), card_deck.pop()]
second_hand = [card_deck.pop(), card_deck.pop()]
player1 = Player(first_hand)
house = Player(second_hand)
while True:
    if len(card_deck) < 20:
        card_deck = create_deck()
    first_hand = [card_deck.pop(), card_deck.pop()]
    second_hand = [card_deck.pop(), card_deck.pop()]
    player1 = Player(first_hand)
    house = Player(second_hand)
    bet = int(input("Please enter your bet: "))
    # player1.bet(bet)
    print(card_deck)
    print_house(house)
    print(player1)
    if player1.has_black_jack():
        player1.draw() if house.has_black_jack() else player1.win(True)
    else:
        while player1.score < 21:
            action = input("Do you want another card? (y/n)\n")
            if action == "y":
                player1.hit(card_deck.pop())
                print(player1)
                print_house(house)
            else:
                break
        while house.score < 16:
            print(house)
            house.hit(card_deck.pop())
        if player1.score > 21:
            player1.draw() if house.score > 21 else player1.win(False)
        elif player1.score > house.score:
            player1.win(True)
        elif player1.score == house.score:
            player1.draw()
        else:
            player1.win(True) if house.score > 21 else player1.win(False)
    print(player1.money)
    print(house)