package com.openclinica.ui.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import javax.inject.Inject;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import com.openclinica.ui.Application;
import com.openclinica.ui.domain.AuthorizationStatus;
import com.openclinica.ui.repository.AuthorizationStatusRepository;


/**
 * Test class for the AuthorizationStatusResource REST controller.
 *
 * @see AuthorizationStatusResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class })
@ActiveProfiles("dev")
public class AuthorizationStatusResourceTest {
    
    private static final Long DEFAULT_ID = new Long(1L);

    private static final String DEFAULT_STATUS = "status";

    private static final String UPD_STATUS = "statusUpt";

    @Inject
    private AuthorizationStatusRepository authorizationStatusRepository;

    private MockMvc restAuthorizationStatusMockMvc;
    
    private AuthorizationStatus authorizationStatus;

    @Before
    public void setup() {
//        MockitoAnnotations.initMocks(this);
//        AuthorizationStatusResource authorizationStatusResource = new AuthorizationStatusResource();
//        ReflectionTestUtils.setField(authorizationStatusResource, "authorizationStatusRepository", authorizationStatusRepository);
//
//        this.restAuthorizationStatusMockMvc = MockMvcBuilders.standaloneSetup(authorizationStatusResource).build();
//
//        authorizationStatus = new AuthorizationStatus();
//        authorizationStatus.setId(DEFAULT_ID);
//        authorizationStatus.setStatus(DEFAULT_STATUS);
    }

    @Test
    public void testCRUDAuthorizationStatus() throws Exception {
//
//    	// Create AuthorizationStatus
//    	restAuthorizationStatusMockMvc.perform(post("/app/rest/authorizationStatuss")
//    			.contentType(TestUtil.APPLICATION_JSON_UTF8)
//                .content(TestUtil.convertObjectToJsonBytes(authorizationStatus)))
//                .andExpect(status().isOk());
//
//    	// Read AuthorizationStatus
//    	restAuthorizationStatusMockMvc.perform(get("/app/rest/authorizationStatuss/{id}", DEFAULT_ID))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//                .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
//    			.andExpect(jsonPath("$.status").value(DEFAULT_STATUS));
//
//    	// Update AuthorizationStatus
//    	authorizationStatus.setStatus(UPD_STATUS);
//  
//    	restAuthorizationStatusMockMvc.perform(post("/app/rest/authorizationStatuss")
//    			.contentType(TestUtil.APPLICATION_JSON_UTF8)
//                .content(TestUtil.convertObjectToJsonBytes(authorizationStatus)))
//                .andExpect(status().isOk());
//
//    	// Read updated AuthorizationStatus
//    	restAuthorizationStatusMockMvc.perform(get("/app/rest/authorizationStatuss/{id}", DEFAULT_ID))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
//                .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
//    			.andExpect(jsonPath("$.status").value(UPD_STATUS));
//
//    	// Delete AuthorizationStatus
//    	restAuthorizationStatusMockMvc.perform(delete("/app/rest/authorizationStatuss/{id}", DEFAULT_ID)
//                .accept(TestUtil.APPLICATION_JSON_UTF8))
//                .andExpect(status().isOk());
//
//    	// Read nonexisting AuthorizationStatus
//    	restAuthorizationStatusMockMvc.perform(get("/app/rest/authorizationStatuss/{id}", DEFAULT_ID)
//                .accept(TestUtil.APPLICATION_JSON_UTF8))
//                .andExpect(status().isNotFound());
    }
}
