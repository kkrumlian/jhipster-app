package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Authorization;
        import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authorization entity.
 */
public interface AuthorizationRepository extends JpaRepository<Authorization, Long> {

}
