package com.flt.flt.dao;

import com.flt.flt.models.QuizCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuizCardRepository extends JpaRepository<QuizCard, Long> {
    @Query("SELECT q FROM QuizCard q WHERE q.id = :id")
    Optional<QuizCard> findById(@Param("id") long id);
    @Modifying
    @Transactional
    @Query("UPDATE QuizCard c SET c.cardOrder = c.cardOrder - 1 WHERE c.cardOrder > :deletedOrder")
    void updateCardOrderAfterDeletion(long deletedOrder);

    @Query("SELECT COALESCE(MAX(c.cardOrder),0) FROM QuizCard c")
    long findMaxCardOrder();

    @Query("SELECT c FROM QuizCard c WHERE c.cardOrder = :cardOrder")
    Optional<QuizCard> findByCardOrder(@Param("cardOrder") long cardOrder);

    @Query("SELECT c FROM QuizCard c")
    List<QuizCard> findAllCards();
}
