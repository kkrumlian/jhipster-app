package com.openclinica.ui.repository;

import com.openclinica.ui.domain.AuthorizationStatus;
        import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Pp_authorization_status entity.
 */
public interface AuthorizationStatusRepository extends JpaRepository<AuthorizationStatus, Long> {

}
