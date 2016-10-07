package io.github.gediineko.repo.jpa;

import io.github.gediineko.model.entity.Entry;
import io.github.gediineko.repo.base.BaseJpaRepo;
import org.springframework.stereotype.Repository;

/**
 * Created by ggolong on 10/7/16.
 */
@Repository
public interface EntryRepository extends BaseJpaRepo<Entry, Long> {
}
