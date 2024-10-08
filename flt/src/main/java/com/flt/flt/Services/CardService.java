package com.flt.flt.Services;

import org.springframework.data.domain.Page;
import com.flt.flt.models.QuizCard;

import java.util.List;
import java.util.Optional;

public interface CardService {
    QuizCard saveCard(QuizCard card);
    void deleteCard(long id);
    QuizCard updateCard(QuizCard card);

    Optional<QuizCard> findCardByCardOrder(long cardOrder);

    long findMaxCardNumber();

    List<QuizCard> getAllCards();
}
