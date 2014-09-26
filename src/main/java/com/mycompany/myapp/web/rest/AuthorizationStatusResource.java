package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.AuthorizationStatus;
import com.mycompany.myapp.repository.AuthorizationStatusRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * REST controller for managing authorization_status.
 */
@RestController
@RequestMapping("/app")
public class AuthorizationStatusResource {

    private final Logger log = LoggerFactory.getLogger(AuthorizationStatusResource.class);

    @Inject
    private AuthorizationStatusRepository authorization_statusRepository;

    /**
     * POST  /rest/authorization_statuses -> Create a new authorization_status.
     */
    @RequestMapping(value = "/rest/authorization_statuses",
            method = RequestMethod.POST,
            produces = "application/json")
    @Timed
    public void create(@RequestBody AuthorizationStatus authorization_status) {
        log.debug("REST request to save authorization_status : {}", authorization_status);
        authorization_statusRepository.save(authorization_status);
    }

    /**
     * GET  /rest/authorization_statuses -> get all the authorization_statuses.
     */
    @RequestMapping(value = "/rest/authorization_statuses",
            method = RequestMethod.GET,
            produces = "application/json")
    @Timed
    public List<AuthorizationStatus> getAll() {
        log.debug("REST request to get all authorization_statuses");
        return authorization_statusRepository.findAll();
    }

    /**
     * GET  /rest/authorization_statuses/:id -> get the "id" authorization_status.
     */
    @RequestMapping(value = "/rest/authorization_statuses/{id}",
            method = RequestMethod.GET,
            produces = "application/json")
    @Timed
    public ResponseEntity<AuthorizationStatus> get(@PathVariable Long id, HttpServletResponse response) {
        log.debug("REST request to get authorization_status : {}", id);
        AuthorizationStatus authorization_status = authorization_statusRepository.findOne(id);
        if (authorization_status == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(authorization_status, HttpStatus.OK);
    }

    /**
     * DELETE  /rest/authorization_statuses/:id -> delete the "id" authorization_status.
     */
    @RequestMapping(value = "/rest/authorization_statuses/{id}",
            method = RequestMethod.DELETE,
            produces = "application/json")
    @Timed
    public void delete(@PathVariable Long id) {
        log.debug("REST request to delete authorization_status : {}", id);
        authorization_statusRepository.delete(id);
    }
}
